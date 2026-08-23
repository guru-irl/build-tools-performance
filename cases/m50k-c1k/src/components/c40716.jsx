import React from 'react';
const LABEL_40716 = 'component_40716';
export function Component40716({ value = 40716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40716, 'data-value': derived.doubled }, children);
}
export default Component40716;
