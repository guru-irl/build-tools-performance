import React from 'react';
const LABEL_3816 = 'component_3816';
export function Component3816({ value = 3816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3816, 'data-value': derived.doubled }, children);
}
export default Component3816;
