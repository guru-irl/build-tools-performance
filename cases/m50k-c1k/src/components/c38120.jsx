import React from 'react';
const LABEL_38120 = 'component_38120';
export function Component38120({ value = 38120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38120, 'data-value': derived.doubled }, children);
}
export default Component38120;
