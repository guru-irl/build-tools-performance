import React from 'react';
const LABEL_38008 = 'component_38008';
export function Component38008({ value = 38008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38008, 'data-value': derived.doubled }, children);
}
export default Component38008;
