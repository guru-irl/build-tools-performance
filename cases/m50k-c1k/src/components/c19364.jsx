import React from 'react';
const LABEL_19364 = 'component_19364';
export function Component19364({ value = 19364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19364, 'data-value': derived.doubled }, children);
}
export default Component19364;
