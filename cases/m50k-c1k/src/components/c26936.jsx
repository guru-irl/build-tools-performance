import React from 'react';
const LABEL_26936 = 'component_26936';
export function Component26936({ value = 26936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26936, 'data-value': derived.doubled }, children);
}
export default Component26936;
