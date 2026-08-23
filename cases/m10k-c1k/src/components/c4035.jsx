import React from 'react';
const LABEL_4035 = 'component_4035';
export function Component4035({ value = 4035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4035, 'data-value': derived.doubled }, children);
}
export default Component4035;
