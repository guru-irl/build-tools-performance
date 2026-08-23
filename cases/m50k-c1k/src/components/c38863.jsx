import React from 'react';
const LABEL_38863 = 'component_38863';
export function Component38863({ value = 38863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38863, 'data-value': derived.doubled }, children);
}
export default Component38863;
