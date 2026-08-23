import React from 'react';
const LABEL_45479 = 'component_45479';
export function Component45479({ value = 45479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45479, 'data-value': derived.doubled }, children);
}
export default Component45479;
