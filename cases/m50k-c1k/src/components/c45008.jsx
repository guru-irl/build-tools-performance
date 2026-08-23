import React from 'react';
const LABEL_45008 = 'component_45008';
export function Component45008({ value = 45008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45008, 'data-value': derived.doubled }, children);
}
export default Component45008;
