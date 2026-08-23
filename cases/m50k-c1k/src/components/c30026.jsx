import React from 'react';
const LABEL_30026 = 'component_30026';
export function Component30026({ value = 30026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30026, 'data-value': derived.doubled }, children);
}
export default Component30026;
