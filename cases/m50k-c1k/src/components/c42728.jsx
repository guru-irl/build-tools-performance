import React from 'react';
const LABEL_42728 = 'component_42728';
export function Component42728({ value = 42728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42728, 'data-value': derived.doubled }, children);
}
export default Component42728;
