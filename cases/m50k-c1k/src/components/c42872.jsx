import React from 'react';
const LABEL_42872 = 'component_42872';
export function Component42872({ value = 42872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42872, 'data-value': derived.doubled }, children);
}
export default Component42872;
