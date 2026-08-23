import React from 'react';
const LABEL_4298 = 'component_4298';
export function Component4298({ value = 4298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4298, 'data-value': derived.doubled }, children);
}
export default Component4298;
