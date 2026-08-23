import React from 'react';
const LABEL_5682 = 'component_5682';
export function Component5682({ value = 5682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5682, 'data-value': derived.doubled }, children);
}
export default Component5682;
