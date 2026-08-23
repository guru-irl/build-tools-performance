import React from 'react';
const LABEL_1035 = 'component_1035';
export function Component1035({ value = 1035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1035, 'data-value': derived.doubled }, children);
}
export default Component1035;
