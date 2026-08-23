import React from 'react';
const LABEL_14716 = 'component_14716';
export function Component14716({ value = 14716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14716, 'data-value': derived.doubled }, children);
}
export default Component14716;
