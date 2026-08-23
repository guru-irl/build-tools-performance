import React from 'react';
const LABEL_46627 = 'component_46627';
export function Component46627({ value = 46627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46627, 'data-value': derived.doubled }, children);
}
export default Component46627;
