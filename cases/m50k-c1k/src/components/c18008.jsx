import React from 'react';
const LABEL_18008 = 'component_18008';
export function Component18008({ value = 18008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18008, 'data-value': derived.doubled }, children);
}
export default Component18008;
