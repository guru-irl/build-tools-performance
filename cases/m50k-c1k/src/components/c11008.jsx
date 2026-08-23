import React from 'react';
const LABEL_11008 = 'component_11008';
export function Component11008({ value = 11008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11008, 'data-value': derived.doubled }, children);
}
export default Component11008;
