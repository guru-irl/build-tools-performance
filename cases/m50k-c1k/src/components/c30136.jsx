import React from 'react';
const LABEL_30136 = 'component_30136';
export function Component30136({ value = 30136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30136, 'data-value': derived.doubled }, children);
}
export default Component30136;
