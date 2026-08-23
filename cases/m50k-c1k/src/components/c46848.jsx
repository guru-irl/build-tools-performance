import React from 'react';
const LABEL_46848 = 'component_46848';
export function Component46848({ value = 46848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46848, 'data-value': derived.doubled }, children);
}
export default Component46848;
