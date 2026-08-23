import React from 'react';
const LABEL_17035 = 'component_17035';
export function Component17035({ value = 17035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17035, 'data-value': derived.doubled }, children);
}
export default Component17035;
