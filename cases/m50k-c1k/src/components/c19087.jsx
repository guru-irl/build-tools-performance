import React from 'react';
const LABEL_19087 = 'component_19087';
export function Component19087({ value = 19087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19087, 'data-value': derived.doubled }, children);
}
export default Component19087;
