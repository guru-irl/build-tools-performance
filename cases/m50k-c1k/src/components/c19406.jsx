import React from 'react';
const LABEL_19406 = 'component_19406';
export function Component19406({ value = 19406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19406, 'data-value': derived.doubled }, children);
}
export default Component19406;
