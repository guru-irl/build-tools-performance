import React from 'react';
const LABEL_28008 = 'component_28008';
export function Component28008({ value = 28008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28008, 'data-value': derived.doubled }, children);
}
export default Component28008;
