import React from 'react';
const LABEL_8183 = 'component_8183';
export function Component8183({ value = 8183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8183, 'data-value': derived.doubled }, children);
}
export default Component8183;
