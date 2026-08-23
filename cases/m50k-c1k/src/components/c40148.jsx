import React from 'react';
const LABEL_40148 = 'component_40148';
export function Component40148({ value = 40148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40148, 'data-value': derived.doubled }, children);
}
export default Component40148;
