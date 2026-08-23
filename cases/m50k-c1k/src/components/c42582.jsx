import React from 'react';
const LABEL_42582 = 'component_42582';
export function Component42582({ value = 42582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42582, 'data-value': derived.doubled }, children);
}
export default Component42582;
