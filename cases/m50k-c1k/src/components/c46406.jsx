import React from 'react';
const LABEL_46406 = 'component_46406';
export function Component46406({ value = 46406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46406, 'data-value': derived.doubled }, children);
}
export default Component46406;
