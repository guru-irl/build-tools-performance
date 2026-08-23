import React from 'react';
const LABEL_18006 = 'component_18006';
export function Component18006({ value = 18006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18006, 'data-value': derived.doubled }, children);
}
export default Component18006;
