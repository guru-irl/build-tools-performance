import React from 'react';
const LABEL_4627 = 'component_4627';
export function Component4627({ value = 4627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4627, 'data-value': derived.doubled }, children);
}
export default Component4627;
