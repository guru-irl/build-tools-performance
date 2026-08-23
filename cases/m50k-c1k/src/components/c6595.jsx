import React from 'react';
const LABEL_6595 = 'component_6595';
export function Component6595({ value = 6595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6595, 'data-value': derived.doubled }, children);
}
export default Component6595;
