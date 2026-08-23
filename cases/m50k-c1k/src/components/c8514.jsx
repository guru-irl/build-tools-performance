import React from 'react';
const LABEL_8514 = 'component_8514';
export function Component8514({ value = 8514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8514, 'data-value': derived.doubled }, children);
}
export default Component8514;
