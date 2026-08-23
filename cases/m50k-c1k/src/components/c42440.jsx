import React from 'react';
const LABEL_42440 = 'component_42440';
export function Component42440({ value = 42440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42440, 'data-value': derived.doubled }, children);
}
export default Component42440;
