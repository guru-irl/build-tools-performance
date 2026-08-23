import React from 'react';
const LABEL_41716 = 'component_41716';
export function Component41716({ value = 41716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41716, 'data-value': derived.doubled }, children);
}
export default Component41716;
