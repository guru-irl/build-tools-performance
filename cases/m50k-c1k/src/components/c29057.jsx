import React from 'react';
const LABEL_29057 = 'component_29057';
export function Component29057({ value = 29057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29057, 'data-value': derived.doubled }, children);
}
export default Component29057;
