import React from 'react';
const LABEL_2863 = 'component_2863';
export function Component2863({ value = 2863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2863, 'data-value': derived.doubled }, children);
}
export default Component2863;
