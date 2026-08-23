import React from 'react';
const LABEL_34872 = 'component_34872';
export function Component34872({ value = 34872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34872, 'data-value': derived.doubled }, children);
}
export default Component34872;
