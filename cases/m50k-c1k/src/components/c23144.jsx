import React from 'react';
const LABEL_23144 = 'component_23144';
export function Component23144({ value = 23144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23144, 'data-value': derived.doubled }, children);
}
export default Component23144;
