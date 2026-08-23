import React from 'react';
const LABEL_4251 = 'component_4251';
export function Component4251({ value = 4251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4251, 'data-value': derived.doubled }, children);
}
export default Component4251;
