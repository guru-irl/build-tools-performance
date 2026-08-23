import React from 'react';
const LABEL_43591 = 'component_43591';
export function Component43591({ value = 43591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43591, 'data-value': derived.doubled }, children);
}
export default Component43591;
