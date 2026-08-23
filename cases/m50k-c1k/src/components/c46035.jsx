import React from 'react';
const LABEL_46035 = 'component_46035';
export function Component46035({ value = 46035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46035, 'data-value': derived.doubled }, children);
}
export default Component46035;
