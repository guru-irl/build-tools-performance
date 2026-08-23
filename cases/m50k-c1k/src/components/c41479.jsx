import React from 'react';
const LABEL_41479 = 'component_41479';
export function Component41479({ value = 41479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41479, 'data-value': derived.doubled }, children);
}
export default Component41479;
