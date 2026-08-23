import React from 'react';
const LABEL_14008 = 'component_14008';
export function Component14008({ value = 14008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14008, 'data-value': derived.doubled }, children);
}
export default Component14008;
