import React from 'react';
const LABEL_30903 = 'component_30903';
export function Component30903({ value = 30903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30903, 'data-value': derived.doubled }, children);
}
export default Component30903;
