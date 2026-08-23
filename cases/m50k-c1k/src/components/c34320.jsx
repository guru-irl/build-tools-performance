import React from 'react';
const LABEL_34320 = 'component_34320';
export function Component34320({ value = 34320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34320, 'data-value': derived.doubled }, children);
}
export default Component34320;
