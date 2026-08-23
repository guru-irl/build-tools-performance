import React from 'react';
const LABEL_4388 = 'component_4388';
export function Component4388({ value = 4388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4388, 'data-value': derived.doubled }, children);
}
export default Component4388;
