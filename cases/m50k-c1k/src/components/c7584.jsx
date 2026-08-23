import React from 'react';
const LABEL_7584 = 'component_7584';
export function Component7584({ value = 7584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7584, 'data-value': derived.doubled }, children);
}
export default Component7584;
