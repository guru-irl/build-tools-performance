import React from 'react';
const LABEL_37008 = 'component_37008';
export function Component37008({ value = 37008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37008, 'data-value': derived.doubled }, children);
}
export default Component37008;
