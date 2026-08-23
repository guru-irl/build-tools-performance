import React from 'react';
const LABEL_40470 = 'component_40470';
export function Component40470({ value = 40470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40470, 'data-value': derived.doubled }, children);
}
export default Component40470;
