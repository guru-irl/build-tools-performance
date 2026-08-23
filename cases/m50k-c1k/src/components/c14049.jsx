import React from 'react';
const LABEL_14049 = 'component_14049';
export function Component14049({ value = 14049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14049, 'data-value': derived.doubled }, children);
}
export default Component14049;
