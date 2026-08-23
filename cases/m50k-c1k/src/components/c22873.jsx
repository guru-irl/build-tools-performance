import React from 'react';
const LABEL_22873 = 'component_22873';
export function Component22873({ value = 22873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22873, 'data-value': derived.doubled }, children);
}
export default Component22873;
