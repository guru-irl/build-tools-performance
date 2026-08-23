import React from 'react';
const LABEL_45222 = 'component_45222';
export function Component45222({ value = 45222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45222, 'data-value': derived.doubled }, children);
}
export default Component45222;
