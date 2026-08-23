import React from 'react';
const LABEL_36570 = 'component_36570';
export function Component36570({ value = 36570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36570, 'data-value': derived.doubled }, children);
}
export default Component36570;
