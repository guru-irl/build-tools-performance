import React from 'react';
const LABEL_2414 = 'component_2414';
export function Component2414({ value = 2414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2414, 'data-value': derived.doubled }, children);
}
export default Component2414;
