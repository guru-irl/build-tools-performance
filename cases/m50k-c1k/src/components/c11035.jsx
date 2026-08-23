import React from 'react';
const LABEL_11035 = 'component_11035';
export function Component11035({ value = 11035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11035, 'data-value': derived.doubled }, children);
}
export default Component11035;
